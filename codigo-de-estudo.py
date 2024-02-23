"""maria=2
pedro=3
soma=pedro+maria
print(soma)"""
"""A=4
B=6
aux=B
B=A
A=aux
print(A, B)"""

'''cpf = input("DIgite seu cpf")
if cpf == 18546023056:
    print("correto")
else:
    print("erouuuu")'''


"""numero1 = int(input("primeiro numero"))
numero2 = int(input("segundo numero"))
soma=numero1+numero2
print(soma)"""
'''import tkinter as tk
from tkinter import messagebox


class LoginApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Login")

        self.username_label = tk.Label(root, text="Username:")
        self.username_label.pack()
        self.username_entry = tk.Entry(root)
        self.username_entry.pack()

        self.password_label = tk.Label(root, text="Password:")
        self.password_label.pack()
        self.password_entry = tk.Entry(root, show="*")
        self.password_entry.pack()

        self.login_button = tk.Button(root, text="Login", command=self.login)
        self.login_button.pack()

    def login(self):
        username = self.username_entry.get()
        password = self.password_entry.get()

        # Here, you can add your authentication logic.
        # For demonstration, I'm just checking if username and password are not empty.
        if username != "" and password != "":
            messagebox.showinfo("Login", "Login successful!")
        else:
            messagebox.showerror("Login", "Invalid username or password.")


if __name__ == "__main__":
    root = tk.Tk()
    app = LoginApp(root)
    root.mainloop()'''
'''numero=int(input("digite o numero"))
valor=int(input("digite o segundo numero"))
mult=numero*valor
divisao=numero/valor
soma=numero+valor
resto=numero%valor
print("a multiplicação", mult)
print("a soma",soma)
print("a divisão", divisao)
print("o resto",resto)'''




