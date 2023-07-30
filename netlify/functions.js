require('dotenv').config()
const {
  S_DB_URL,
  S_DB_KEY
} = process.env

const { createClient } = require('@supabase/supabase-js')
const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY)

exports.handler = async event => {
  const { data, error } = await supabase
    .from('notes')
    .insert([
      { note: 'I need to not forget this' },
    ])

  console.log(data, error)
}