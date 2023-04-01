import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        fetch(`https://repli-q-task-server.vercel.app/dashboard/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsAdmin(true);
                setAdminLoading(false);
            })
    }, [email]);

    return [isAdmin, adminLoading];
}

export default useAdmin;