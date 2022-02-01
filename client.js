import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aelgedevfrrsvebxpnba.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY4NzY5OSwiZXhwIjoxOTU5MjYzNjk5fQ.fcMIHLakbYcml2dh7jw-9eZkz3GVD5vfnTX0JFvs-J4";
export const supabase = createClient(supabaseUrl, supabaseKey);
