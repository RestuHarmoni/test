# Bintang Ceria - Full Audio & Touch Version

Versi ini sudah ada terus dalam game:

- Suara arahan Melayu menggunakan browser SpeechSynthesis
- Sound effect betul, salah, tap, reward dan tick hampir tamat menggunakan WebAudio
- Background music synth ceria menggunakan WebAudio
- Touch effect / ripple setiap kali skrin disentuh
- Bank soalan `data/question-bank.json`
- Struktur audio masih disediakan untuk Admin Panel upload MP3 sebenar kemudian

Nota:
SpeechSynthesis bergantung pada voice yang tersedia dalam browser/peranti.
Jika peranti ada suara Malay/Malaysia, game akan guna suara itu.
Jika tiada, browser akan guna suara default.

Untuk production premium, letakkan MP3 sebenar dalam:
assets/audio/voice/ms-female/
assets/audio/sfx/
assets/audio/music/
