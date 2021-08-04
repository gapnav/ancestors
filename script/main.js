document.addEventListener("DOMContentLoaded", function(event) {
  let d = sample_ancestors;
  // if (typeof data !== 'undefined') d = data;
  let nodes = dataToNodes(d);
  forceDirectedTree(nodes);
});

function dataToNodes(data){
  let flat_nodes = [];
  let nodes = data.parents.map(p => personToNode(p, flat_nodes, 1));
  let max_level = Math.max.apply(null, flat_nodes.map(n => n.value));
  flat_nodes.forEach(node => {
    node.value = max_level + 3 - node.value;

    let h = Math.floor(256 / max_level) * node.value;
    node.color = hslToColor(h,50,50);
  });

  return nodes;
}

function personToNode(person, flat_nodes, level){
  let node = {
    name: person.name + "\n" + person.birth_date,
    value: level
  }
  if (!!person.parents){
    node.children = person.parents.map(p => personToNode(p, flat_nodes, level+1));
  }

  flat_nodes.push(node)
  return node;
}

function hslToColor(h,s,l){
  let el = document.getElementById('hsl_to_rgb');
  el.style.color = 'hsl(' + h +', ' + s + '%, ' + l + '%)';
  let rgb = window.getComputedStyle(el).color.split(',').map(x => x.replaceAll(/\D/g, ''));
  let hex = rgb.map(x => {
    let h = parseInt(x).toString(16);
    if (h.length < 2) h = '0' + h;
    return h;
  });
  return '#' + hex.join('');
}
