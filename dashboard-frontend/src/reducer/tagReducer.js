export default function tagReducer(state = { type: "home" }, action) {
  if (action.type == "tag") {
    console.log("tag");
    return { type: action.tag };
  } else {
    return state;
  }
}
