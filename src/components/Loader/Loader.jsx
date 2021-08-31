import Loader from "react-loader-spinner";
import css from "./Loader.module.css"

const LoaderSpinner = () => {
    return (
        <div className={css.spinnerWraper}><Loader className={css.spinner}
            type="Oval"
            color="#3f51b5"
            height={50}
            width={50}
        />
        </div>
    );
}

export default LoaderSpinner;