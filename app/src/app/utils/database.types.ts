export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      property: {
        Row: {
          Address: string | null
          created_at: string
          Description: string | null
          Distance: number | null
          id: number
          PetFriendly: boolean | null
          PriceRange: number | null
          SmokeFriendly: boolean | null
        }
        Insert: {
          Address?: string | null
          created_at?: string
          Description?: string | null
          Distance?: number | null
          id?: number
          PetFriendly?: boolean | null
          PriceRange?: number | null
          SmokeFriendly?: boolean | null
        }
        Update: {
          Address?: string | null
          created_at?: string
          Description?: string | null
          Distance?: number | null
          id?: number
          PetFriendly?: boolean | null
          PriceRange?: number | null
          SmokeFriendly?: boolean | null
        }
        Relationships: []
      }
      user: {
        Row: {
          created_at: string
          email: string | null
          firstName: string | null
          gender: Database["public"]["Enums"]["gender"] | null
          id: number
          lastName: string | null
          listings: number | null
          number: number | null
          prefDistance: Database["public"]["Enums"]["prefDistance"] | null
          prefGender: Database["public"]["Enums"]["gender"] | null
          prefPet: boolean | null
          prefPrice: Database["public"]["Enums"]["prefPrice"] | null
          prefSmoke: boolean | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          firstName?: string | null
          gender?: Database["public"]["Enums"]["gender"] | null
          id?: number
          lastName?: string | null
          listings?: number | null
          number?: number | null
          prefDistance?: Database["public"]["Enums"]["prefDistance"] | null
          prefGender?: Database["public"]["Enums"]["gender"] | null
          prefPet?: boolean | null
          prefPrice?: Database["public"]["Enums"]["prefPrice"] | null
          prefSmoke?: boolean | null
        }
        Update: {
          created_at?: string
          email?: string | null
          firstName?: string | null
          gender?: Database["public"]["Enums"]["gender"] | null
          id?: number
          lastName?: string | null
          listings?: number | null
          number?: number | null
          prefDistance?: Database["public"]["Enums"]["prefDistance"] | null
          prefGender?: Database["public"]["Enums"]["gender"] | null
          prefPet?: boolean | null
          prefPrice?: Database["public"]["Enums"]["prefPrice"] | null
          prefSmoke?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "user_listings_fkey"
            columns: ["listings"]
            isOneToOne: false
            referencedRelation: "property"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      gender: "male" | "female" | "other" | "prefer not to say"
      prefDistance: "5km" | "10km" | "15km" | "15km+"
      prefPrice: "750" | "850" | "950" | "1050" | "1050+"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
