interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode]
  ? //  左->头->右
    [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
  : []
