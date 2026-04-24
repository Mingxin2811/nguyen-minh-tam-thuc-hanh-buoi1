import './NewCollections.scss';
function NewCollections() {
    return (
        <>
            <div className="newCollections">
                <div className="container">
                    <div className="newCollections-header">
                        <h1 className="newCollections-label">New collections</h1>
                        <p className="newCollections-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ut dolorum consequuntur, adipisci repellat! Eveniet commodi voluptatem voluptate, eum minima, in suscipit explicabo voluptatibus harum, quibusdam ex repellat eaque!</p>

                    </div>
                    <div className="newCollections-boxes">
                        <div className="box-item">
                            <img src="https://themewagon.github.io/kaira/images/banner-image-6.jpg"></img>
                            <h2 className="box-label">Soft leather jackets</h2>
                            <p className="box-desc">Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                            <div className="box-discover"><a href="#">DISCOVER NOW</a></div>
                        </div>
                        <div className="box-item">
                            <img src="https://themewagon.github.io/kaira/images/banner-image-4.jpg"></img>
                            <h2 className="box-label">Soft leather jackets</h2>
                            <p className="box-desc">Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                            <div className="box-discover"><a href="#">DISCOVER NOW</a></div>
                        </div>
                        <div className="box-item">
                            <img src="https://themewagon.github.io/kaira/images/banner-image-5.jpg"></img>
                            <h2 className="box-label">Soft leather jackets</h2>
                            <p className="box-desc">Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                            <div className="box-discover"><a href="#">DISCOVER NOW</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NewCollections;