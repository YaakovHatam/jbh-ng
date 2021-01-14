import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'descLimit'
})
export class DescLimitPipe implements PipeTransform {

    indexReturn(arr: string[],
        idx: number, currentCharsCount: number,
        charLimit: number, seperatorLength: number): number {

        if (arr.length === 0) {
            throw new Error('empty array');
        }
        if (idx === 0) {
            currentCharsCount--;
        }
        if (idx === arr.length) {
            return idx - 1;
        }

        currentCharsCount += arr[idx].length + seperatorLength;

        if (currentCharsCount > charLimit) {
            return idx;
        }

        return this.indexReturn(arr, idx + 1, currentCharsCount, charLimit, seperatorLength);
    }

    transform(value: string, ...args: unknown[]): string {
        const sliceValue = +args[0];
        const seperator = ' ';
        let valueArray = value.split(seperator);
        const idx = this.indexReturn(valueArray, 0, 0, sliceValue, seperator.length);
        valueArray = valueArray.slice(0, idx);

        return valueArray.join(seperator) + '...';
    }

}
