import { Expect, Equal } from '@type-challenges/utils'

interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const

type InorderTraversal<
  T extends TreeNode | null,
  U extends TreeNode = NonNullable<T>
> = T extends U
  ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
  : []
type case_3376 = Expect<Equal<InorderTraversal<typeof tree1>, [1, 3, 2]>>
