import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../../redux/slices/userSlice";
import Hero from "../../components/Hero";
import HomeFeatures from "../../components/HomeFeatures";

function Home() {
    const dispatch = useDispatch();
    const token = JSON.parse(localStorage.getItem("token"));
    useEffect(() => {
        if (token) {
            dispatch(fetchUserData({ token }));
        }
    }, [token, dispatch]);

    return (
        <main>
            <section>
                <Hero />
                <HomeFeatures />
            </section>
        </main>
    );
}

export default Home;
