1. Create an interface UserData for the form below

```html
<style>
    body {
        font-size: 1.25rem;
        font-family: sans-serif;
        margin: 2rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
    }

    input {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        padding: 0.5rem;
        min-width: 50vw;
        max-width: 100%;
    }
</style>

<form action="" id="form">
    <label for="nome">Nome</label>
    <input type="text" id="nome" name="nome" />
    <label for="email">Email</label>
    <input type="email" id="email" name="email" />
    <label for="cpf">CPF</label>
    <input type="text" id="cpf" name="cpf" />
</form>
```

2. Create a global variable UserData on the window, it will be any object
3. Add a keyup event to the form
4. When the event occurs, add the {[id]: value} to UserData
5. Save UserData in localStorage
6. Create a User Type Guard, to check if the localStorage value is compatible with UserData
7. On page refresh, fill in the localStorage values (if it is UserData) in the form and in
   window.UserData
