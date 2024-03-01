import { toast } from "react-toastify";
import { auth } from "../config/firebase";

export default async function SignOut() {
    try {
        await auth.signOut();
        // Optional: You can perform additional actions after sign-out, such as redirecting to a different page.
      } catch (error) {
        toast.error('Error signing out:', error);
      }
}