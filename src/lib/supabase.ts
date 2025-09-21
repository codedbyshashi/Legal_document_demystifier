import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://tvwsjzvsvokbzwotyrdd.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2d3NqenZzdm9rYnp3b3R5cmRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzNTUyOTAsImV4cCI6MjA3MzkzMTI5MH0.oUvDclnMxAgtvZc1NzsoIbiRnlpJXrYf5SIOJ7_zeFo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Document {
  id: string
  user_id?: string
  name: string
  type: string
  size: number
  upload_date: string
  content: string
  analysis: any
  language: string
  created_at: string
  updated_at: string
}

export interface User {
  id: string
  email: string
  preferred_language: string
  created_at: string
  updated_at: string
}

// Database functions
export const saveDocument = async (document: Omit<Document, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('documents')
    .insert([document])
    .select()
    .single()
  
  if (error) throw error
  return data
}

export const getUserDocuments = async (userId?: string) => {
  const { data, error } = await supabase
    .from('documents')
    .select('*')
    .eq('user_id', userId || null)
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data
}

export const updateUserLanguage = async (userId: string, language: string) => {
  const { data, error } = await supabase
    .from('users')
    .upsert([{ id: userId, preferred_language: language }])
    .select()
    .single()
  
  if (error) throw error
  return data
}