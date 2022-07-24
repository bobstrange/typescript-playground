import { useSelector, shallowEqual } from "react-redux"

export function useGlobalItems(): { [k in string]: number } {
  return useSelector((state) => state, shallowEqual)
}
