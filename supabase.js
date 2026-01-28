import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wqfxvruesogbmsfsakur.supabase.co'
const supabaseAnonKey = 'sb_publishable_-Teli4QA-K7MBl7Lv-v_7A_kyDIUOh1'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)

// jis jis jgh dbms chahjiye hoga 
// write - import { supabase } from './supabaseClient'

