import Produto from "../../components/Produto";


function HomePage() {
    return (
        <>
            <h2>Home Page</h2>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Produto titulo="Mouse USB Apple" valor={15.99}>
                            Mouse USB - Apple
                        </Produto>
                    </div>
                    <div className="col">
                        <Produto titulo="Teclado USB Apple" valor={95.99}>
                            Teclado USB - Apple
                        </Produto>
                    </div>
                    <div className="col">
                        <Produto titulo="Monitor Apple" valor={5500.00}>
                            Monitor - Apple
                        </Produto>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default HomePage;