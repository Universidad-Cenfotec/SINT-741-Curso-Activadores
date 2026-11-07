// Semaforo compartido: Arduino Uno R3.
// Rojo: 13; amarillo: 12; verde: 11.
// Una resistencia de 220 ohmios en serie con cada LED.
const int rojo = 13;
const int amarillo = 12;
const int verde = 11;

void setup() {
  pinMode(rojo, OUTPUT);
  pinMode(amarillo, OUTPUT);
  pinMode(verde, OUTPUT);
  digitalWrite(rojo, LOW);
  digitalWrite(amarillo, LOW);
  digitalWrite(verde, LOW);
}

void loop() {
  // Fase roja: 8 segundos.
  digitalWrite(verde, LOW);
  digitalWrite(amarillo, LOW);
  digitalWrite(rojo, HIGH);
  delay(8000);

  // Fase verde: 8 segundos.
  digitalWrite(rojo, LOW);
  digitalWrite(amarillo, LOW);
  digitalWrite(verde, HIGH);
  delay(8000);

  // Fase amarilla: 3 segundos.
  digitalWrite(rojo, LOW);
  digitalWrite(verde, LOW);
  digitalWrite(amarillo, HIGH);
  delay(3000);
}
