let ancestors = {};

document.addEventListener("DOMContentLoaded", function(event) {
  let nodes = dataToNodes(ancestors);
  forceDirectedTree(nodes);
});

function dataToNodes(data){
  let flat_nodes = [];
  let nodes = data.parents.map(p => personToNode(p, flat_nodes, 2));
  let max_level = Math.max.apply(null, flat_nodes.map(n => n.value));

  let core_children = data.core_children.map(p => {
    let node = personToNode(p, flat_nodes, 1);
    return node;
  })

  // set ID for core children to link them with first level of parents
  core_children.forEach((node, i) => node.id = i );

  // set links
  nodes.forEach(node => node.link = core_children.map(node => node.id))

  nodes = nodes.concat(core_children);

  flat_nodes.forEach(node => {
    node.value = max_level - node.value;
    // node.color = nodeColorByLevel(node, max_level);
    node.color = nodeColorBySex(node, max_level);
    node.value += 5;
  });

  return nodes;
}

function personToNode(person, flat_nodes, level){
  // reverse is used to force last row to have more words than first row (when not equal)
  let wrapped_name = person.name.split(/\s+/).reverse().chunks(2).reverse().map(x => x.reverse()).map(chunk => chunk.join(' ')).join("\n")
  let node = {
    name: wrapped_name + "\n" + person.birth_date,
    sex: person.sex,
    value: level,
    tooltip: nodeTooltip(person)
  }

  if (!!person.parents){
    node.children = person.parents.map(p => personToNode(p, flat_nodes, level+1));
  }

  flat_nodes.push(node)
  return node;
}

function nodeTooltip(person){
  return Object.keys(person).filter(k => !['parents', 'sex'].includes(k)).map(key => {
    let value = person[key];
    if (value instanceof Array) value = value.join('; ');
    return humanize(key) + ': ' + value;
  }).join("\n");
}

function nodeColorByLevel(node, max_level){
  let h = Math.floor(256 / max_level) * node.value;
  return hslToColor(h, 50, 50);
}

function nodeColorBySex(node, max_level){
  let h = node.sex === 'female' ? 300 : 240;
  let s_max = 100;
  let s_min = 30;
  let s = Math.floor((s_max - s_min) / max_level) * node.value + s_min;

  return hslToColor(h, s, 50);
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

function humanize(str, titleize=false) {
  var upcase_pattern = (!!titleize) ? /^.|\s./g : /^./;
  return str.trim().split(/\s+/).map(function(str) {
    return str.replace(/_/g, ' ').replace(/\s+/, ' ').trim();
  }).join(' ').toLowerCase().replace(upcase_pattern, function(m) {
    return m.toUpperCase();
  });
}

Array.prototype.chunks = function(chunk_size){
  if (!chunk_size || chunk_size < 2) throw 'chunk_size should be 2 or greater';

  let result = [];
  this.forEach(x => {
    if (!result.length || result[result.length - 1].length >= chunk_size) result.push([]);
    result[result.length - 1].push(x);
  });
  return result;
};
