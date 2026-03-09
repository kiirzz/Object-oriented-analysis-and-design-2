import { AnimatedSprite, Sprite, Stage } from "@pixi/react";
import { useEffect, useRef, useState } from "react";
import { Texture } from "pixi.js";

type Props = {
  textures: Texture[] | null;
  resultWeaponTexture: Texture | null;
  width: number;
  height: number;
  rotate?: boolean;
};

export const AnimatedCharacter = (props: Props) => {
  const animatedSpriteRef = useRef<any>(null);
  const weaponSpriteRef = useRef<any>(null);

  // Local state để tránh re-render Stage khi props thay đổi
  const [currentTexture, setCurrentTexture] = useState<Texture[] | null>(
    props.textures,
  );
  const [currentWeaponTexture, setCurrentWeaponTexture] =
    useState<Texture | null>(props.resultWeaponTexture);

  // Khi props.textures thay đổi, update AnimatedSprite textures
  useEffect(() => {
    if (props.textures && animatedSpriteRef.current) {
      const sprite = animatedSpriteRef.current;
      sprite.stop();
      sprite.textures = [...props.textures]; // force refresh
      sprite.gotoAndStop(0);
      sprite.play();
    }
  }, [props.textures]);

  // Khi weapon texture thay đổi, update Sprite
  useEffect(() => {
    if (props.resultWeaponTexture && weaponSpriteRef.current) {
      weaponSpriteRef.current.texture = props.resultWeaponTexture;
      setCurrentWeaponTexture(props.resultWeaponTexture);
    }
  }, [props.resultWeaponTexture]);

  return (
    <Stage
      width={props.width}
      height={props.height}
      options={{ backgroundColor: 0xffffff }}
    >
      <AnimatedSprite
        ref={animatedSpriteRef}
        textures={currentTexture ?? []}
        animationSpeed={0.2}
        isPlaying={true}
        loop={true}
        scale={3}
        anchor={0.5}
        x={props.width / 2}
        y={props.height / 2}
      />

      {currentWeaponTexture && (
        <Sprite
          ref={weaponSpriteRef}
          texture={currentWeaponTexture}
          scale={2}
          anchor={0.5}
          x={props.width / 2 + 30}
          y={props.height / 2 + 30}
          rotation={props.rotate ? Math.PI / 2 : 0}
        />
      )}
    </Stage>
  );
};
