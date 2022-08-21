// Get info on the right of URL
// Provide the splitting text as input
export const extractURLRightVal = ({ url, txt }: { url: string; txt: string }) => {
    return url.split(txt)[1];
};
