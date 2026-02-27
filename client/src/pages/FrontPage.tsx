import { Link } from "react-router-dom";

function FrontPage() {
    return (
        <>
            game-console-web
            <div>
        <Link to="/difficulty">
          <button>
            Start Game
          </button>
        </Link>
                        <button>
                    Join Game
                </button>
            </div>
        </>
    );
}

export default FrontPage;
