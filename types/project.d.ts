import { Tech } from "@/data/TechItemsData"

export type Project = { 
    title : string 
    description : string , 
    heroImage : string , 
    subText : string,
    techs? : Tech[],
  }