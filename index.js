function bumpCounter() {
  var counter = 0

  function addBump() {
    counter += 1
  }

  function getBumps() {
    return counter
  }
  return {
    addBump,
    getBumps
  }
}

function createAnimal(animalType) {
  function deadlyDevice(device) {
      var object = {
        animalType: `${animalType}`,
        deadlyDevice: `${device}`
      }
    return object
  }
  return deadlyDevice
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')
