import * as THREE from 'three';


export class ObjectFactory {

  static createSphere(
    pos_x: number = 0.0,
    pos_y: number = 0.0,
    pos_z: number = 0.0,
    radius: number = 1.0,
    opacity: number = 1.0,
    color: number | string = 0x22DD22,
    side: THREE.Side = THREE.FrontSide,
    texture_filepath?: string,
  ): THREE.Mesh {
    const sphereRadius = radius;
    const sphereGeometry = new THREE.SphereGeometry(sphereRadius, 20, 20);
    let matArgs: any = {
      color: color,
      opacity: opacity,
      transparent: true,
      side: side,
      depthWrite: false
    };
    if (texture_filepath !== undefined) {
      matArgs['map'] = (new THREE.TextureLoader()).load(texture_filepath);
    }
    const sphereMaterial = new THREE.MeshLambertMaterial(matArgs);
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    sphere.position.x = pos_x;
    sphere.position.y = pos_y;
    sphere.position.z = pos_z;
    sphere.castShadow = true;

    return sphere;
  }

  static createBox(
    pos_x: number = 0,
    pos_y: number = 0,
    pos_z: number = 0,
    size_x: number = 1.0,
    size_y: number = 1.0,
    size_z: number = 1.0,
    opacity: number = 1.0,
    color: number | string = 0xff0000,
    side: THREE.Side = THREE.FrontSide,
    texture_filepath?: string,
  ): THREE.Mesh {
    let matArgs: any = {
      color: color,
      opacity: opacity,
      transparent: true,
      side: side,
      depthWrite: false
    };
    if (texture_filepath !== undefined) {
      matArgs['map'] = (new THREE.TextureLoader()).load(texture_filepath);
    }
    const box = new THREE.Mesh(
        new THREE.BoxGeometry(size_x, size_y, size_z),
        new THREE.MeshStandardMaterial(matArgs)
    );
    box.receiveShadow = true;

    box.position.set(pos_x, pos_y, pos_z);
    return box;
  }

  static createPlane(
    pos_x: number = 0,
    pos_y: number = 0,
    pos_z: number = 0,
    rotation_x: number = -0.5*Math.PI, 
    rotation_y: number = 0,
    rotation_z: number = 0,
    opacity: number = 1.0,
    color: number | string = 0xffffff,
    size_h: number = 3,
    size_w:number = 3,
    side: THREE.Side = THREE.DoubleSide,
    texture_filepath?: string,
  ): THREE.Mesh {
    const planeGeometry = new THREE.PlaneGeometry(size_w, size_h, 1, 1);
    let matArgs: any = {
      color: color,
      opacity: opacity,
      transparent: true,
      side: side
    };
    if (texture_filepath !== undefined) {
      matArgs['map'] = (new THREE.TextureLoader()).load(texture_filepath);
    }
    const planeMaterial = new THREE.MeshStandardMaterial(matArgs);
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    plane.castShadow = true;

    plane.rotation.set(rotation_x, rotation_y, rotation_z);
    plane.position.set(pos_x, pos_y, pos_z);

    return plane;
  }

  static createArrow(
    name: string,
    pos_x: number = 0,
    pos_y: number = 0,
    pos_z: number = 0,
    dir_x: number = 0,
    dir_y: number = 1,
    dir_z: number = 0,
    rotation_x: number = -Math.PI,
    rotation_y: number = 0,
    rotation_z: number = 0,
    length: number = 0.8,
    color: number | string = 0x00ff00,
    headWidth: number = 0.3,
    headLength: number = 0.3
  ): THREE.ArrowHelper {
    const dir = new THREE.Vector3(dir_x, dir_y, dir_z);
    const pos = new THREE.Vector3(pos_x, pos_y, pos_z);
    const arrowHelper = new THREE.ArrowHelper(dir, pos, length, color, 
                                              headWidth, headLength);
    arrowHelper.name = name;
    arrowHelper.rotation.x = rotation_x;
    arrowHelper.rotation.y = rotation_y;
    arrowHelper.rotation.z = rotation_z;

    return arrowHelper;
  }

  static createSprite(
    pos_x: number = 0,
    pos_y: number = 0,
    pos_z: number = 0,
    scale: number = 0.2,
    color: number | string = 0x0000ee,
  ): THREE.Sprite {
    const material = new THREE.SpriteMaterial({color: color});
    const sprite = new THREE.Sprite(material);
    sprite.position.x = pos_x;
    sprite.position.y = pos_y;
    sprite.position.z = pos_z;
    sprite.scale.x = scale;
    sprite.scale.y = scale;
    sprite.scale.z = scale;

    return sprite;
  }

  static createTorusKnot(
    pos_x: number = 0,
    pos_y: number = 0,
    pos_z: number = 0,
    radius: number = 1,
    tube: number = 0.4,
    tubularSegments: number = 64,
    radiusSegments: number = 8,
    p: number = 2,
    q: number = 3,
    opacity: number = 1.0,
    color: number | string = 0x6699FF,
    roughness: number = 0.5,
    side: THREE.Side = THREE.FrontSide,
    texture_filepath?: string,
  ): THREE.Mesh {
    const geometry = new THREE.TorusKnotGeometry(
      radius, tube, tubularSegments, radiusSegments, p, q
    )
    let matArgs: any = {
      color: color,
      opacity: opacity,
      transparent: true,
      side: side,
      roughness: roughness,
    };
    if (texture_filepath !== undefined) {
      matArgs['map'] = (new THREE.TextureLoader()).load(texture_filepath);
    }
    const material = new THREE.MeshStandardMaterial(matArgs);
    const torus = new THREE.Mesh(geometry, material);
    torus.receiveShadow = true;
    torus.castShadow = true;
    torus.position.set(pos_x, pos_y, pos_z);
    return torus
  }

}

export default ObjectFactory;
