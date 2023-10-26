import { Pokemon, PokemonPropertyArray } from "src/Models/Pokemon";
import { PokeContext } from "../../Contexts/PokeContext";
import {
  HorizontalContainer,
  TextInput,
  Label,
  HorizontalDivider,
  Container,
  Dropdown,
  PokemonTypeOption,
  LinedHeader,
  StatTitleContainer,
  StatIconContainer,
  StatIcon,
  CapitalizedSubtitle,
} from "./styles";

import PokemonTypes from "src/strings/PokemonTypes.json";
import { ForEach } from "src/Components/ForEach";
import { Render } from "src/Components/Render";
import { useEffect } from "react";

import ShiledIcon from "src/assets/images/shield.png";
import SpeedIcon from "src/assets/images/speed.png";
import SwordIcon from "src/assets/images/sword.png";

export const CreateOrEditPokemon = () => {
  const {
    selectedPokemon: [pokemon, setPokemon],
  } = PokeContext.useContext();

  const updateProperty =
    <Key extends keyof Pokemon>(
      propertyName: Key
    ): React.ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      const newValue = e.target.value as Pokemon[Key];
      setPokemon((oldPokemon) => ({
        ...oldPokemon!,
        [propertyName]: newValue,
      }));
    };

  const addValueToPropertyArray =
    (
      key: PokemonPropertyArray,
      index: number
    ): React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> =>
    (e) => {
      const copyArray = [...pokemon![key]];
      copyArray[index] = e.target.value;

      setPokemon((oldPokemon) => ({
        ...oldPokemon!,
        [key]: copyArray,
      }));
    };

  // I'm pretty sure there might be a better way to do this
  // However I still don't know how.
  let nameInput: HTMLInputElement | null = null;
  let hpInput: HTMLInputElement | null = null;
  let weightInput: HTMLInputElement | null = null;
  let heightInput: HTMLInputElement | null = null;
  let type0: HTMLSelectElement | null = null;
  let type1: HTMLSelectElement | null = null;
  let ability0: HTMLInputElement | null = null;
  let ability1: HTMLInputElement | null = null;
  let ability2: HTMLInputElement | null = null;
  let ability3: HTMLInputElement | null = null;
  let defenseInput: HTMLInputElement | null = null;
  let attackInput: HTMLInputElement | null = null;
  let specialDefenseInput: HTMLInputElement | null = null;
  let specialAttackInput: HTMLInputElement | null = null;
  let speedInput: HTMLInputElement | null = null;

  useEffect(() => {
    nameInput!.value = pokemon!.name;
    hpInput!.value = (pokemon!.hp || "").toString();
    weightInput!.value = (pokemon!.weight || "").toString();
    heightInput!.value = (pokemon!.height || "").toString();
    type0!.value = pokemon!.types[0] || "_default";

    ability0!.value = pokemon!.abilities[0] || "";
    ability1!.value = pokemon!.abilities[1] || "";
    ability2!.value = pokemon!.abilities[2] || "";
    ability3!.value = pokemon!.abilities[3] || "";

    defenseInput!.value = (pokemon!.defense || "").toString();
    attackInput!.value = (pokemon!.attack || "").toString();
    specialDefenseInput!.value = (pokemon!.special_deffense || "").toString();
    specialAttackInput!.value = (pokemon!.special_attack || "").toString();
    speedInput!.value = (pokemon!.speed || "").toString();

    // This has to be wrapped in an if statement because
    // the select for the second doesnt exists if the pokemon
    // has only one type
    if (pokemon!.types.length > 0) {
      type1!.value = pokemon!.types[1] || "_default";
    }
  }, [pokemon]);

  return (
    <Container>
      <Label>Nome</Label>
      <TextInput
        placeholder="Nome"
        onChange={updateProperty("name")}
        ref={(ref) => (nameInput = ref)}
      />

      <Label>HP</Label>
      <TextInput
        placeholder="HP"
        type="number"
        onChange={updateProperty("hp")}
        ref={(ref) => (hpInput = ref)}
      />

      <Label>Peso</Label>
      <TextInput
        placeholder="PESO"
        type="number"
        onChange={updateProperty("weight")}
        ref={(ref) => (weightInput = ref)}
      />

      <Label>Altura</Label>
      <TextInput
        placeholder="ALTURA"
        type="number"
        onChange={updateProperty("height")}
        ref={(ref) => (heightInput = ref)}
      />

      <HorizontalContainer>
        <HorizontalDivider />
        <LinedHeader>Tipo</LinedHeader>
        <HorizontalDivider />
      </HorizontalContainer>

      <Label>Tipo</Label>
      <Dropdown
        ref={(ref) => (type0 = ref)}
        onChange={addValueToPropertyArray("types", 0)}
      >
        <PokemonTypeOption disabled selected value="_default">
          Selecione o(s) tipo(s)
        </PokemonTypeOption>
        <ForEach
          data={Object.values(PokemonTypes)}
          render={(type) => (
            <PokemonTypeOption value={type}>
              {type.toUpperCase()}
            </PokemonTypeOption>
          )}
        />
      </Dropdown>

      <Render when={pokemon!.types.length > 0}>
        <Dropdown
          ref={(ref) => (type1 = ref)}
          onChange={addValueToPropertyArray("types", 1)}
        >
          <PokemonTypeOption disabled selected value="_default">
            Selecione o(s) tipo(s)
          </PokemonTypeOption>
          <ForEach
            data={Object.values(PokemonTypes)}
            render={(type) => (
              <PokemonTypeOption value={type}>
                {type.toUpperCase()}
              </PokemonTypeOption>
            )}
          />
        </Dropdown>
      </Render>

      <HorizontalContainer>
        <HorizontalDivider />
        <LinedHeader>Habilidades</LinedHeader>
        <HorizontalDivider />
      </HorizontalContainer>

      <TextInput
        placeholder="Habilidade 1"
        ref={(ref) => (ability0 = ref)}
        onChange={addValueToPropertyArray("abilities", 0)}
      />
      <TextInput
        placeholder="Habilidade 2"
        ref={(ref) => (ability1 = ref)}
        onChange={addValueToPropertyArray("abilities", 1)}
      />
      <TextInput
        placeholder="Habilidade 3"
        ref={(ref) => (ability2 = ref)}
        onChange={addValueToPropertyArray("abilities", 2)}
      />
      <TextInput
        placeholder="Habilidade 4"
        ref={(ref) => (ability3 = ref)}
        onChange={addValueToPropertyArray("abilities", 4)}
      />

      <HorizontalContainer>
        <HorizontalDivider />
        <LinedHeader>Estatísticas</LinedHeader>
        <HorizontalDivider />
      </HorizontalContainer>

      <StatTitleContainer>
        <StatIconContainer>
          <StatIcon src={ShiledIcon} />
        </StatIconContainer>
        <CapitalizedSubtitle>Defesa</CapitalizedSubtitle>
      </StatTitleContainer>
      <TextInput
        placeholder="00"
        ref={(ref) => (defenseInput = ref)}
        onChange={updateProperty("defense")}
      />

      <StatTitleContainer>
        <StatIconContainer>
          <StatIcon src={SwordIcon} />
        </StatIconContainer>
        <CapitalizedSubtitle>Ataque</CapitalizedSubtitle>
      </StatTitleContainer>
      <TextInput
        placeholder="00"
        ref={(ref) => (attackInput = ref)}
        onChange={updateProperty("attack")}
      />

      <StatTitleContainer>
        <StatIconContainer>
          <StatIcon src={ShiledIcon} />
        </StatIconContainer>
        <CapitalizedSubtitle>Defesa Especial</CapitalizedSubtitle>
      </StatTitleContainer>
      <TextInput
        placeholder="00"
        ref={(ref) => (specialDefenseInput = ref)}
        onChange={updateProperty("special_deffense")}
      />

      <StatTitleContainer>
        <StatIconContainer>
          <StatIcon src={SwordIcon} />
        </StatIconContainer>
        <CapitalizedSubtitle>Ataque Especial</CapitalizedSubtitle>
      </StatTitleContainer>
      <TextInput
        placeholder="00"
        ref={(ref) => (specialAttackInput = ref)}
        onChange={updateProperty("special_attack")}
      />

      <StatTitleContainer>
        <StatIconContainer>
          <StatIcon src={SpeedIcon} />
        </StatIconContainer>
        <CapitalizedSubtitle>Velocidade</CapitalizedSubtitle>
      </StatTitleContainer>
      <TextInput
        placeholder="00"
        ref={(ref) => (speedInput = ref)}
        onChange={updateProperty("speed")}
      />
    </Container>
  );
};
