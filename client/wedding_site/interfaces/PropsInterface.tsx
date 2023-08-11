export interface Props {
    isDivVisible: boolean;
    handleToggle: (toggled: boolean) => void;
    handleToggleRSVP: () => void;
    scrollToMid: () => void;
    formVisible: boolean;
    isGuestList: boolean;
}
