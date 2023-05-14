
import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "./firebaseConfig";

 const removeFromDB =async (id) => {
  try {
    const user = auth?.currentUser;
    const userRef = collection(db, "users");

    const userdataRef = doc(userRef, user.uid);
    const cartItemsref = collection(userdataRef, "cartItems");

    await deleteDoc(doc(cartItemsref, id));
  } catch (error) {
    console.log(error);
  }
}

const addToDB = async (item) => {
  // try {
  //   await updateDoc(doc(userRef, user.uid), {
  //     cartItems: arrayUnion(item),
  //   });
  // } catch (error) {
  //   console.log(error);
  // }

  try {
    const user = auth?.currentUser;
    const userRef = collection(db, "users");

    const userdataRef = doc(userRef, user?.uid);
    const cartItemsref = collection(userdataRef, "cartItems");
    await setDoc(doc(cartItemsref, item.id), item, { merge: true });
  } catch (error) {
    console.log(error);
  }
};

export { removeFromDB, addToDB };
