import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LanguageWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
};
