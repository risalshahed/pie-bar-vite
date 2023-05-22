import './Header.css';

const Header = () => {
    return (
        <header>
            <h2>LOGO</h2>
            <div>
                <div>
                    <input type="text" placeholder='Search by title or brand' />
                </div>
                <div>
                    <button>Add Product</button>
                </div>
            </div>
        </header>
    );
};

export default Header;