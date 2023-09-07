import "./Category.css"

const Category = (props) => {
    return <section className="category">
        <h3>{props.category}</h3>
        <div className="videos"></div>
    </section>
}

export default Category