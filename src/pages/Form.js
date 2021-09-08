import React, {useState} from "react"

const Form = ({initialBlog, handleSubmit, buttonLabel, history}) => {
    /////////////////
    // Styling
    ////////////////
    const button = {
        backgroundColor: "navy",
        display: "block",
        margin: "auto",
        marginBottom: "10px",
      };

    /// State for Form Data
    const [formData, setFormData] = useState(initialBlog)

    //////////////
    // Functions
    /////////////
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    };

    const handleSubmission = (event) => {
        event.preventDefault()
        handleSubmit(formData)
        history.push("/")
    };

    return (
        <form onSubmit={handleSubmission}>
            <input
                type="text"
                onChange={handleChange}
                value={formData.title}
                name="title"
            />
            <input
                type="text"
                onChange={handleChange}
                value={formData.body}
                name="body"
            />
            <input style={button} type="submit" value={buttonLabel}/>
        </form>
    );
};

export default Form