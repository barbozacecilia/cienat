import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className="container flex flex--center flex--column">
            <img className="error" src={"./img/404-error.jpg"} alt="imagen de error" />
            <h1 className="notfound-text">Esta página no existe</h1>
        </div>
    )
}

export default ErrorPage;
