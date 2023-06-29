function addLink(resource, rel, href) {
    if (!resource.links) {
      resource.links = [];
    }
  
    const link = { rel, href };
    resource.links.push(link);
  }
  
  module.exports = {
    addLink,
  };
  