import { useParams } from "react-router-dom";
function User() {
    const {userid} = useParams();
    return (
        <div className="flex flex-col items-center py-28">
            <h1 className="text-4xl font-bold py-12">We are learning how to take parameters value..</h1>
            <h1 className="text-6xl font-bold text-blue-600">
                {/* here the variable should be the same which you have given it in the router, where you have give its path and after the path there is a slash colon(/:) and variable name so in this variable the parameter value will be stored. 
                you have to use a hook called useParams to access the value*/}
                User : <span className="text-red-600">{userid}</span> 
            </h1>
        </div>
    )
}

export default User;