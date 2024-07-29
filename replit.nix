{ pkgs }: {
	deps = [
   pkgs.global-platform-pro
		pkgs.nodejs-12_x
		pkgs.nodePackages.typescript-language-server
		pkgs.yarn
		pkgs.replitPackages.jest
	];
}