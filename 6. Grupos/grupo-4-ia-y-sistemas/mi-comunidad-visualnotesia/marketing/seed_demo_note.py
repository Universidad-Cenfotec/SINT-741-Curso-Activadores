# -*- coding: utf-8 -*-
"""Enriquece la nota demo existente con los campos nuevos (para capturas/demo)."""
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import database as db
import gemini_service as g

s = db.SessionLocal()
note = s.query(db.Note).first()
if not note:
    print("NO NOTE FOUND")
    s.close()
    raise SystemExit

audio_description = (
    "Clase magistral sobre Fundamentos de Sistemas Distribuidos. El profesor explica la concurrencia, "
    "la tolerancia a fallos y la consistencia de datos, y cierra con el Teorema CAP. Tono expositivo, "
    "con ejemplos de bases de datos y servidores en la nube. Duracion estimada: 18 minutos."
)
transcription = (
    "Bienvenidos a la clase de hoy. Vamos a hablar de sistemas distribuidos. Un sistema distribuido es un "
    "conjunto de computadoras independientes que se presentan al usuario como un solo sistema coherente. "
    "Lo primero que debemos entender es la concurrencia: varios procesos o hilos ejecutandose al mismo "
    "tiempo y que necesitan comunicarse. Tenemos dos grandes modelos: memoria compartida y paso de mensajes. "
    "Despues viene la tolerancia a fallos. Si un nodo falla, el sistema no debe caerse. Para lograrlo usamos "
    "replicacion: activa y pasiva. La replicacion activa envia la operacion a todos los nodos a la vez; la "
    "pasiva tiene un lider que propaga los cambios. Tambien usamos heartbeats para detectar si un nodo sigue "
    "vivo. Finalmente, el Teorema CAP, propuesto por Eric Brewer. Dice que ante una particion de red no "
    "podemos garantizar al mismo tiempo consistencia, disponibilidad y tolerancia a particiones: solo dos de "
    "las tres. Si elegimos consistencia y tolerancia a particiones, sacrificamos disponibilidad, como en los "
    "sistemas bancarios. Si elegimos disponibilidad y tolerancia a particiones, aceptamos consistencia "
    "eventual, como en muchas redes sociales. Recuerden: la consistencia eventual significa que todos los "
    "nodos llegaran al mismo valor, pero no de inmediato."
)
clean_text = (
    "## Sistemas distribuidos\nUn sistema distribuido es un conjunto de computadoras independientes que se "
    "presentan al usuario como un unico sistema coherente.\n\n"
    "## Concurrencia\nVarios procesos o hilos se ejecutan al mismo tiempo y necesitan comunicarse. Existen "
    "dos modelos principales:\n\n- Memoria compartida.\n- Paso de mensajes.\n\n"
    "## Tolerancia a fallos\nSi un nodo falla, el sistema no debe caerse. Se logra mediante:\n\n"
    "- Replicacion activa: la operacion se envia a todos los nodos a la vez.\n"
    "- Replicacion pasiva: un lider propaga los cambios.\n"
    "- Heartbeats: detectan si un nodo sigue vivo.\n\n"
    "## Teorema CAP\nPropuesto por Eric Brewer. Ante una particion de red no se pueden garantizar al mismo "
    "tiempo Consistencia, Disponibilidad y Tolerancia a particiones: solo dos de las tres."
)
notes = (
    "### Definiciones\n"
    "- **Sistema distribuido:** conjunto de computadoras independientes que se comporta como un unico sistema.\n"
    "- **Concurrencia:** ejecucion simultanea de procesos que colaboran entre si.\n\n"
    "### Modelos de comunicacion\n"
    "1. Memoria compartida\n"
    "2. Paso de mensajes\n\n"
    "### Tolerancia a fallos\n"
    "- Replicacion activa y pasiva\n"
    "- Heartbeats para deteccion de fallos\n\n"
    "### Teorema CAP\n"
    "> No se puede garantizar C, A y P simultaneamente ante una particion de red.\n\n"
    "- CP: bancos (consistencia sobre disponibilidad)\n"
    "- AP: redes sociales (disponibilidad sobre consistencia fuerte)"
)
keywords = ["Sistemas Distribuidos", "Teorema CAP", "Concurrencia", "Tolerancia a Fallos", "Replicacion", "Consistencia"]

note.audio_description = audio_description
note.transcription = transcription
note.clean_text = clean_text
note.notes_text = notes
note.keywords_json = json.dumps(keywords, ensure_ascii=False)

d = note.to_dict()
d["notes"] = notes
d["keywords"] = keywords
d["audio_description"] = audio_description
d["clean_text"] = clean_text
d["transcription"] = transcription
note.markdown_doc = g.generate_markdown_file_content(d)

s.commit()
print("NOTE UPDATED id=", note.id)
s.close()
