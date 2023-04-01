import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        window.document.title = `${title} - RepliQ Task`;
    }, [title])
};

export default useTitle;