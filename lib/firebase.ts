import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { Appointment, User } from "@/types";

// Appointments Collection
export const appointmentsCollection = collection(db, "appointments");
export const usersCollection = collection(db, "users");

// Create appointment
export const createAppointment = async (
  appointmentData: Omit<
    Appointment,
    "id" | "created_at" | "updated_at" | "status"
  >
) => {
  try {
    const docRef = await addDoc(appointmentsCollection, {
      ...appointmentData,
      status: "pending",
      created_at: Timestamp.now(),
      updated_at: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating appointment:", error);
    throw error;
  }
};

// Get all appointments
export const getAppointments = async () => {
  try {
    const q = query(appointmentsCollection, orderBy("created_at", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Appointment[];
  } catch (error) {
    console.error("Error getting appointments:", error);
    throw error;
  }
};

// Update appointment status
export const updateAppointmentStatus = async (
  id: string,
  status: Appointment["status"]
) => {
  try {
    const appointmentRef = doc(db, "appointments", id);
    await updateDoc(appointmentRef, {
      status,
      updated_at: Timestamp.now(),
    });
  } catch (error) {
    console.error("Error updating appointment:", error);
    throw error;
  }
};

// Delete appointment
export const deleteAppointment = async (id: string) => {
  try {
    await deleteDoc(doc(db, "appointments", id));
  } catch (error) {
    console.error("Error deleting appointment:", error);
    throw error;
  }
};

// Create user profile
export const createUserProfile = async (
  uid: string,
  userData: Omit<User, "id" | "created_at">
) => {
  try {
    await addDoc(usersCollection, {
      id: uid,
      ...userData,
      created_at: Timestamp.now(),
    });
  } catch (error) {
    console.error("Error creating user profile:", error);
    throw error;
  }
};

// Get user by email
export const getUserByEmail = async (email: string) => {
  try {
    const q = query(usersCollection, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...doc.data() } as User;
    }
    return null;
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
};
