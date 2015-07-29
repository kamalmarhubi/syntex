initSidebarItems({"constant":[["AS_PREC","Precedence of the `as` operator, which is a binary operator not appearing in the prior table."]],"fn":[["binop_to_string",""],["compute_id_range_for_fn_body","Computes the id range for a single fn body, ignoring nested items."],["compute_id_range_for_inlined_item",""],["empty_generics",""],["float_ty_to_string",""],["ident_to_pat",""],["ident_to_path",""],["impl_pretty_name","Generate a \"pretty\" name for an `impl` from its type and trait. This is designed so that symbols of `impl`'d methods give some hint of where they came from, (previously they would all just be listed as `__extensions__::method_name::hash`, with no indication of the type)."],["int_ty_max",""],["int_ty_to_string","Get a string representation of a signed int type, with its value. We want to avoid \"45int\" and \"-3int\" in favor of \"45\" and \"-3\""],["is_by_value_binop","Returns `true` if the binary operator takes its arguments by value"],["is_by_value_unop","Returns `true` if the unary operator takes its argument by value"],["is_comparison_binop",""],["is_local",""],["is_path",""],["is_shift_binop",""],["lazy_binop",""],["lit_is_str","Returns true if this literal is a string and false otherwise."],["local_def",""],["name_to_dummy_lifetime",""],["operator_prec","Maps a binary operator to its precedence"],["pat_is_ident","Returns true if the given pattern consists solely of an identifier and false otherwise."],["path_name_eq",""],["path_name_i",""],["path_to_ident",""],["segments_name_eq",""],["stmt_id",""],["struct_def_is_tuple_like","Returns true if the given struct def is tuple-like; i.e. that its fields are unnamed."],["struct_field_visibility",""],["uint_ty_max",""],["uint_ty_to_string","Get a string representation of an unsigned int type, with its value. We want to avoid \"42u\" in favor of \"42us\". \"42uint\" is right out."],["unop_to_string",""],["visit_ids_for_inlined_item",""],["walk_pat",""]],"struct":[["IdRange",""],["IdVisitor","A visitor that applies its operation to all of the node IDs in a visitable thing."]],"trait":[["IdVisitingOperation",""]]});