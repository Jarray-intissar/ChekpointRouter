import React,{ useState } from "react";
import { Button, Modal } from "react-bootstrap";


function AddModale({ movies,setMovies }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addmovie = ()=>setMovies([...movies,newmovie]);

  const [newmovie, setnewmovie] = useState({
    name: " ",
    posterurl: " ",
    description: " ",
    rating: 0,
  });

  return (
    <div>
      <div
        onClick={handleShow}
      >
        <button  variant="dark" style={{
          width: "100",
          height: "100",
          margin: "15px 20px",
	        borderRadius: "10px 10px",

        }}> + </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body >
         <input
            placeholder="name"
            onChange={(e) => setnewmovie({ ...newmovie, name: e.target.value })}
          />
         
        <input
            placeholder="posterurl"
            onChange={(e) =>
              setnewmovie({ ...newmovie, posterurl: e.target.value })
            }
          />
          <input
            placeholder="description"
            onChange={(e) =>
              setnewmovie({ ...newmovie, description: e.target.value })
            }
          />
         <input
            placeholder="rating"
            onChange={(e) =>
              setnewmovie({ ...newmovie, rating: e.target.value })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}>  Close </Button>
          <Button
            variant="primary"
            onClick={() => { addmovie(); handleClose();
            }}
            style={{
              color: "white",
              backgroundColor: "red",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default AddModale;




 