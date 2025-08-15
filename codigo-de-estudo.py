import sys
from PySide6 import QtWidgets

# 1. Toda aplicação PySide6 precisa de uma (e apenas uma) instância de QApplication.
# O sys.argv permite passar argumentos da linha de comando para a aplicação.
app = QtWidgets.QApplication(sys.argv)

# 2. Crie um widget para ser a janela principal. QWidget é a base de todos os objetos de UI.
window = QtWidgets.QWidget()
window.setWindowTitle("Minha Primeira App PySide6") # Define o título da janela
window.resize(300, 100) # Define o tamanho inicial da janela (largura, altura)

# 3. Crie um layout para organizar os widgets dentro da janela.
# QVBoxLayout organiza os widgets verticalmente.
layout = QtWidgets.QVBoxLayout(window)
botao = QtWidgets.QPushButton("Clique em mim!")
layout.addWidget(botao)

botao.clicked.connect(lambda: print("Botão clicado!"))  # Exemplo de ação ao clicar no botão

# 4. Crie um widget (um rótulo de texto) e adicione-o ao layout.
label = QtWidgets.QLabel("Olá, Mundo!")
layout.addWidget(label)

# 5. Mostre a janela.
window.show()

# 6. Inicie o loop de eventos da aplicação. O programa ficará aqui até a janela ser fechada.
sys.exit(app.exec())
