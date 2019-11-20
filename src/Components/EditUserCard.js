import react from "react";
import AxiosWithAuth from "../Utils/AxiosWithAuth";

const EditUserCard = () => {
  const [editing, setEditing] = useState(false);
  const [fieldToEdit, setFieldToEdit] = useState(initialfield);

  const editUser = user => {
    setEditing(true);
    setFieldToEdit(user);
  };

  const saveEdit = e => {
    e.preventDefault();
    AxiosWithAuth()
      .put(`/api/auth/${fieldToEdit.id}`, fieldToEdit)
      .then(response => {
        const newUser = userInfo.map(userInfo => {
          if (fieldToEdit.id === userInfo.id) {
            return response.data;
          } else {
            return userInfo;
          }
        });
      });
    updateUser;
  };
};
