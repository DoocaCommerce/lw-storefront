import { Brand } from "../modules/brand/BrandTypes";
import { Category } from "../modules/category/CategoryTypes";
import { Page } from "../modules/pages/PageTypes";
import { Section } from "../modules/sections/SectionsTypes";
import { Setting } from "../modules/settings/SettingsTypes";

export enum Module {
    section = "section",
    setting = "setting"
}

export type ModuleType = Brand | Category | Page | Section<unknown> | Setting<unknown>
