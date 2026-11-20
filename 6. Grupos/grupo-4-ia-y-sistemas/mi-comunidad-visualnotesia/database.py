import datetime
import json
import os
import bcrypt
from sqlalchemy import create_engine, Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import declarative_base, sessionmaker, relationship

DB_PATH = os.environ.get("VISUALNOTES_DB") or os.path.join(
    os.path.dirname(os.path.abspath(__file__)), "visualnotes.db"
)

# Asegurar que exista la carpeta de la base de datos (p. ej. /app/data en Docker).
try:
    _db_dir = os.path.dirname(os.path.abspath(DB_PATH))
    if _db_dir:
        os.makedirs(_db_dir, exist_ok=True)
except Exception:
    pass

DATABASE_URL = f"sqlite:///{DB_PATH}"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(120), nullable=False)
    email = Column(String(150), unique=True, index=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    career = Column(String(120), default="Ingeniería / Ciencias")
    university = Column(String(150), default="Universidad")
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    notes = relationship("Note", back_populates="owner", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "career": self.career,
            "university": self.university,
            "created_at": self.created_at.isoformat() if self.created_at else None
        }

class Note(Base):
    __tablename__ = "notes"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    title = Column(String(200), nullable=False)
    subject = Column(String(120), default="General")
    input_type = Column(String(50), nullable=False)  # 'audio', 'image', 'text'
    audio_description = Column(Text, default="")
    transcription = Column(Text, default="")
    clean_text = Column(Text, default="")
    notes_text = Column(Text, default="")
    keywords_json = Column(Text, default="[]")
    mermaid_code = Column(Text, nullable=False)
    summary = Column(Text, default="")
    key_points_json = Column(Text, default="[]")
    quiz_json = Column(Text, default="[]")
    study_links_json = Column(Text, default="{}")
    visual_resources_json = Column(Text, default="[]")
    map_json = Column(Text, default="{}")
    markdown_doc = Column(Text, default="")
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    owner = relationship("User", back_populates="notes")

    def to_dict(self):
        try:
            key_points = json.loads(self.key_points_json) if self.key_points_json else []
        except Exception:
            key_points = []
        try:
            quiz = json.loads(self.quiz_json) if self.quiz_json else []
        except Exception:
            quiz = []
        try:
            study_links = json.loads(self.study_links_json) if self.study_links_json else {}
        except Exception:
            study_links = {}
        try:
            keywords = json.loads(self.keywords_json) if self.keywords_json else []
        except Exception:
            keywords = []
        try:
            visual_resources = json.loads(self.visual_resources_json) if self.visual_resources_json else []
        except Exception:
            visual_resources = []
        try:
            map_data = json.loads(self.map_json) if self.map_json else {}
            if not isinstance(map_data, dict):
                map_data = {}
        except Exception:
            map_data = {}
        if not isinstance(map_data.get("concepts"), list):
            map_data["concepts"] = []
        if not isinstance(map_data.get("relations"), list):
            map_data["relations"] = []
        if not isinstance(map_data.get("events"), list):
            map_data["events"] = []
        if not isinstance(map_data.get("tables"), list):
            map_data["tables"] = []

        return {
            "id": self.id,
            "user_id": self.user_id,
            "title": self.title,
            "subject": self.subject,
            "input_type": self.input_type,
            "audio_description": self.audio_description or "",
            "transcription": self.transcription,
            "clean_text": self.clean_text or "",
            "notes_text": self.notes_text or "",
            "keywords": keywords,
            "mermaid_code": self.mermaid_code,
            "summary": self.summary,
            "key_points": key_points,
            "quiz": quiz,
            "study_links": study_links,
            "visual_resources": visual_resources,
            "map_data": map_data,
            "markdown_doc": self.markdown_doc or "",
            "created_at": self.created_at.strftime("%Y-%m-%d %H:%M") if self.created_at else ""
        }

def hash_password(password: str) -> str:
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode("utf-8"), salt).decode("utf-8")

def verify_password(plain_password: str, hashed_password: str) -> bool:
    try:
        return bcrypt.checkpw(plain_password.encode("utf-8"), hashed_password.encode("utf-8"))
    except Exception:
        return False

def init_db():
    Base.metadata.create_all(bind=engine)
    # Migración suave de columnas en SQLite si ya existía la tabla
    with engine.connect() as conn:
        from sqlalchemy import text
        try:
            conn.execute(text("ALTER TABLE notes ADD COLUMN study_links_json TEXT DEFAULT '{}'"))
            conn.commit()
        except Exception:
            pass
        try:
            conn.execute(text("ALTER TABLE notes ADD COLUMN visual_resources_json TEXT DEFAULT '[]'"))
            conn.commit()
        except Exception:
            pass
        try:
            conn.execute(text("ALTER TABLE notes ADD COLUMN map_json TEXT DEFAULT '{}'"))
            conn.commit()
        except Exception:
            pass
        try:
            conn.execute(text("ALTER TABLE notes ADD COLUMN markdown_doc TEXT DEFAULT ''"))
            conn.commit()
        except Exception:
            pass
        for col_name, col_def in (
            ("audio_description", "TEXT DEFAULT ''"),
            ("clean_text", "TEXT DEFAULT ''"),
            ("notes_text", "TEXT DEFAULT ''"),
            ("keywords_json", "TEXT DEFAULT '[]'"),
        ):
            try:
                conn.execute(text(f"ALTER TABLE notes ADD COLUMN {col_name} {col_def}"))
                conn.commit()
            except Exception:
                pass

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
