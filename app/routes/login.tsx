import Button from 'react-bootstrap/Button';
 export default function login() {
  return (
    <div>
      <h1>Page de connexion</h1>
      <form method="post" action="/login">
        <input type="text" name="username" placeholder="Nom d'utilisateur" required />
        <input type="password" name="password" placeholder="Mot de passe" required />
        <button type="submit">Se connecter</button>
       
      </form>
    </div>
  ); 
}