{
  description = "Deno Utils";

  inputs = {
    hotPot.url = "github:shopstic/nix-hot-pot";
    flakeUtils.follows = "hotPot/flakeUtils";
    nixpkgs.follows = "hotPot/nixpkgs";
  };

  outputs = { self, nixpkgs, flakeUtils, hotPot }:
    flakeUtils.lib.eachSystem [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ] (system:
      let
        pkgs = import nixpkgs { inherit system; };
        hotPotPkgs = hotPot.packages.${system};
        deno = hotPotPkgs.deno;
        vscodeSettings = pkgs.writeTextFile {
          name = "vscode-settings.json";
          text = builtins.toJSON {
            "deno.enable" = true;
            "deno.lint" = true;
            "deno.unstable" = true;
            "deno.path" = deno + "/bin/deno";
            "deno.suggest.imports.hosts" = {
              "https://deno.land" = false;
            };
            "editor.tabSize" = 2;
            "[typescript]" = {
              "editor.defaultFormatter" = "denoland.vscode-deno";
              "editor.formatOnSave" = true;
            };
            "nix.enableLanguageServer" = true;
            "nix.formatterPath" = pkgs.nixpkgs-fmt + "/bin/nixpkgs-fmt";
            "nix.serverPath" = pkgs.rnix-lsp + "/bin/rnix-lsp";
          };
        };
      in
      rec {
        devShell = pkgs.mkShellNoCC {
          buildInputs = [ deno ];
          shellHook = ''
            mkdir -p ./.vscode
            cat ${vscodeSettings} > ./.vscode/settings.json
          '';
        };
        defaultPackage = devShell.inputDerivation;
      }
    );
}
