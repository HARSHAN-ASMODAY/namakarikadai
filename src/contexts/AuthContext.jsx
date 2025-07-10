import React, { createContext, useContext, useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  createUserWithEmailAndPassword 
} from 'firebase/auth'

// Firebase configuration (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyCGFytPhTVVCnNSeE-UMYPfBwDNhCPYtl8",
  authDomain: "tamil-kadai.firebaseapp.com",
  projectId: "tamil-kadai",
  storageBucket: "tamil-kadai.firebasestorage.app",
  messagingSenderId: "774649574412",
  appId: "1:774649574412:web:6969371c48efb99e656a29",
  measurementId: "G-Z3QKGTTGVD"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [userRole, setUserRole] = useState(null)

  // Mock user roles for demo (in real app, this would come from Firestore)
  const mockUsers = {
    'admin@namakarikadai.com': 'admin',
    'staff@namakarikadai.com': 'staff',
    'chef@namakarikadai.com': 'staff'
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      if (user) {
        setUserRole(mockUsers[user.email] || 'customer')
      } else {
        setUserRole(null)
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const login = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      return { success: true, user: result.user }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const signup = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      return { success: true, user: result.user }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const value = {
    currentUser,
    userRole,
    login,
    logout,
    signup
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
} 