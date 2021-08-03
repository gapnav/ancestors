document.addEventListener("DOMContentLoaded", function(event) {
  let d = sample_data;
  if (typeof data !== 'undefined') d = data;
  forceDirectedTree(d);
});
