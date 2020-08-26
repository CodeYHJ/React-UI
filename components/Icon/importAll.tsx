let importAll = (requireContext:any) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('./svg/', true, /\.svg$/))
} catch (error) {
}