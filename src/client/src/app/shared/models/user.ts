import { BodyFat, Weight, Height, BmrDetailsResource } from "./body-mass"

export interface UserViewResource {
    id: string,
    fullName: string,
    username: string
}

export interface UserWorkoutProfileDetailsResource {
    id: string,
    userId?: string,
    bodyFat?: BodyFat,
    weight?: Weight,
    height?: Height,
    gender?: string,
    age?: number
    bmi?: number,
    bmr?: BmrDetailsResource
}